using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectToo.Data;
using ProjectToo.Entities;

namespace ProjectToo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryTypesController : ControllerBase
    {
        private readonly ProjectDBContext _context;

        public InventoryTypesController(ProjectDBContext context)
        {
            _context = context;
        }

        // GET: api/InventoryTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InventoryType>>> GetInventoryTypes()
        {
            return await _context.InventoryTypes.ToListAsync();
        }

        // GET: api/InventoryTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InventoryType>> GetInventoryType(int id)
        {
            var inventoryType = await _context.InventoryTypes.FindAsync(id);

            if (inventoryType == null)
            {
                return NotFound();
            }

            return inventoryType;
        }

        // PUT: api/InventoryTypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInventoryType(int id, InventoryType inventoryType)
        {
            if (id != inventoryType.TypeID)
            {
                return BadRequest();
            }

            _context.Entry(inventoryType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InventoryTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/InventoryTypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<InventoryType>> PostInventoryType(InventoryType inventoryType)
        {
            _context.InventoryTypes.Add(inventoryType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInventoryType", new { id = inventoryType.TypeID }, inventoryType);
        }

        // DELETE: api/InventoryTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInventoryType(int id)
        {
            var inventoryType = await _context.InventoryTypes.FindAsync(id);
            if (inventoryType == null)
            {
                return NotFound();
            }

            _context.InventoryTypes.Remove(inventoryType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InventoryTypeExists(int id)
        {
            return _context.InventoryTypes.Any(e => e.TypeID == id);
        }
    }
}
