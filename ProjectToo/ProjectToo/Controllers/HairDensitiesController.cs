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
    public class HairDensitiesController : ControllerBase
    {
        private readonly ProjectDBContext _context;

        public HairDensitiesController(ProjectDBContext context)
        {
            _context = context;
        }

        // GET: api/HairDensities
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HairDensity>>> GetHairDensities()
        {
            return await _context.HairDensities.ToListAsync();
        }

        // GET: api/HairDensities/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HairDensity>> GetHairDensity(int id)
        {
            var hairDensity = await _context.HairDensities.FindAsync(id);

            if (hairDensity == null)
            {
                return NotFound();
            }

            return hairDensity;
        }

        // PUT: api/HairDensities/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHairDensity(int id, HairDensity hairDensity)
        {
            if (id != hairDensity.ID)
            {
                return BadRequest();
            }

            _context.Entry(hairDensity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HairDensityExists(id))
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

        // POST: api/HairDensities
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<HairDensity>> PostHairDensity(HairDensity hairDensity)
        {
            _context.HairDensities.Add(hairDensity);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHairDensity", new { id = hairDensity.ID }, hairDensity);
        }

        // DELETE: api/HairDensities/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHairDensity(int id)
        {
            var hairDensity = await _context.HairDensities.FindAsync(id);
            if (hairDensity == null)
            {
                return NotFound();
            }

            _context.HairDensities.Remove(hairDensity);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HairDensityExists(int id)
        {
            return _context.HairDensities.Any(e => e.ID == id);
        }
    }
}
