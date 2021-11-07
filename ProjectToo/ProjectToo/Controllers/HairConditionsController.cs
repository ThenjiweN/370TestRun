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
    public class HairConditionsController : ControllerBase
    {
        private readonly ProjectDBContext _context;

        public HairConditionsController(ProjectDBContext context)
        {
            _context = context;
        }

        // GET: api/HairConditions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HairCondition>>> GetHairConditions()
        {
            return await _context.HairConditions.ToListAsync();
        }

        // GET: api/HairConditions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HairCondition>> GetHairCondition(int id)
        {
            var hairCondition = await _context.HairConditions.FindAsync(id);

            if (hairCondition == null)
            {
                return NotFound();
            }

            return hairCondition;
        }

        // PUT: api/HairConditions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHairCondition(int id, HairCondition hairCondition)
        {
            if (id != hairCondition.ID)
            {
                return BadRequest();
            }

            _context.Entry(hairCondition).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HairConditionExists(id))
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

        // POST: api/HairConditions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<HairCondition>> PostHairCondition(HairCondition hairCondition)
        {
            _context.HairConditions.Add(hairCondition);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHairCondition", new { id = hairCondition.ID }, hairCondition);
        }

        // DELETE: api/HairConditions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHairCondition(int id)
        {
            var hairCondition = await _context.HairConditions.FindAsync(id);
            if (hairCondition == null)
            {
                return NotFound();
            }

            _context.HairConditions.Remove(hairCondition);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HairConditionExists(int id)
        {
            return _context.HairConditions.Any(e => e.ID == id);
        }
    }
}
