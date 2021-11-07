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
    public class SubhurbsController : ControllerBase
    {
        private readonly ProjectDBContext _context;

        public SubhurbsController(ProjectDBContext context)
        {
            _context = context;
        }

        // GET: api/Subhurbs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Subhurb>>> GetSubhurbs()
        {
            return await _context.Subhurbs.ToListAsync();
        }

        // GET: api/Subhurbs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Subhurb>> GetSubhurb(int id)
        {
            var subhurb = await _context.Subhurbs.FindAsync(id);

            if (subhurb == null)
            {
                return NotFound();
            }

            return subhurb;
        }

        // PUT: api/Subhurbs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSubhurb(int id, Subhurb subhurb)
        {
            if (id != subhurb.SubhurbId)
            {
                return BadRequest();
            }

            _context.Entry(subhurb).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubhurbExists(id))
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

        // POST: api/Subhurbs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Subhurb>> PostSubhurb(Subhurb subhurb)
        {
            _context.Subhurbs.Add(subhurb);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSubhurb", new { id = subhurb.SubhurbId }, subhurb);
        }

        // DELETE: api/Subhurbs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSubhurb(int id)
        {
            var subhurb = await _context.Subhurbs.FindAsync(id);
            if (subhurb == null)
            {
                return NotFound();
            }

            _context.Subhurbs.Remove(subhurb);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SubhurbExists(int id)
        {
            return _context.Subhurbs.Any(e => e.SubhurbId == id);
        }
    }
}
