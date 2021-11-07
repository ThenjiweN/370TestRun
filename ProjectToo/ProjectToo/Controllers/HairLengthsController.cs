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
    public class HairLengthsController : ControllerBase
    {
        private readonly ProjectDBContext _context;

        public HairLengthsController(ProjectDBContext context)
        {
            _context = context;
        }

        // GET: api/HairLengths
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HairLength>>> GetHairLengths()
        {
            return await _context.HairLengths.ToListAsync();
        }

        // GET: api/HairLengths/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HairLength>> GetHairLength(int id)
        {
            var hairLength = await _context.HairLengths.FindAsync(id);

            if (hairLength == null)
            {
                return NotFound();
            }

            return hairLength;
        }

        // PUT: api/HairLengths/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHairLength(int id, HairLength hairLength)
        {
            if (id != hairLength.ID)
            {
                return BadRequest();
            }

            _context.Entry(hairLength).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HairLengthExists(id))
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

        // POST: api/HairLengths
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<HairLength>> PostHairLength(HairLength hairLength)
        {
            _context.HairLengths.Add(hairLength);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHairLength", new { id = hairLength.ID }, hairLength);
        }

        // DELETE: api/HairLengths/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHairLength(int id)
        {
            var hairLength = await _context.HairLengths.FindAsync(id);
            if (hairLength == null)
            {
                return NotFound();
            }

            _context.HairLengths.Remove(hairLength);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HairLengthExists(int id)
        {
            return _context.HairLengths.Any(e => e.ID == id);
        }
    }
}
