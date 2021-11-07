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
    public class ReturnReasonsController : ControllerBase
    {
        private readonly ProjectDBContext _context;

        public ReturnReasonsController(ProjectDBContext context)
        {
            _context = context;
        }

        // GET: api/ReturnReasons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReturnReason>>> GetReturnReasons()
        {
            return await _context.ReturnReasons.ToListAsync();
        }

        // GET: api/ReturnReasons/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ReturnReason>> GetReturnReason(int id)
        {
            var returnReason = await _context.ReturnReasons.FindAsync(id);

            if (returnReason == null)
            {
                return NotFound();
            }

            return returnReason;
        }

        // PUT: api/ReturnReasons/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReturnReason(int id, ReturnReason returnReason)
        {
            if (id != returnReason.ID)
            {
                return BadRequest();
            }

            _context.Entry(returnReason).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReturnReasonExists(id))
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

        // POST: api/ReturnReasons
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ReturnReason>> PostReturnReason(ReturnReason returnReason)
        {
            _context.ReturnReasons.Add(returnReason);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReturnReason", new { id = returnReason.ID }, returnReason);
        }

        // DELETE: api/ReturnReasons/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReturnReason(int id)
        {
            var returnReason = await _context.ReturnReasons.FindAsync(id);
            if (returnReason == null)
            {
                return NotFound();
            }

            _context.ReturnReasons.Remove(returnReason);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReturnReasonExists(int id)
        {
            return _context.ReturnReasons.Any(e => e.ID == id);
        }
    }
}
