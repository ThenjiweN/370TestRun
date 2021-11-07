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
    public class AllergensController : ControllerBase
    {
        private readonly ProjectDBContext _context;

        public AllergensController(ProjectDBContext context)
        {
            _context = context;
        }

        // GET: api/Allergens
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Allergen>>> GetAllergens()
        {
            return await _context.Allergens.ToListAsync();
        }

        // GET: api/Allergens/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Allergen>> GetAllergen(int id)
        {
            var allergen = await _context.Allergens.FindAsync(id);

            if (allergen == null)
            {
                return NotFound();
            }

            return allergen;
        }

        // PUT: api/Allergens/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAllergen(int id, Allergen allergen)
        {
            if (id != allergen.ID)
            {
                return BadRequest();
            }

            _context.Entry(allergen).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AllergenExists(id))
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

        // POST: api/Allergens
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Allergen>> PostAllergen(Allergen allergen)
        {
            _context.Allergens.Add(allergen);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAllergen", new { id = allergen.ID }, allergen);
        }

        // DELETE: api/Allergens/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAllergen(int id)
        {
            var allergen = await _context.Allergens.FindAsync(id);
            if (allergen == null)
            {
                return NotFound();
            }

            _context.Allergens.Remove(allergen);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AllergenExists(int id)
        {
            return _context.Allergens.Any(e => e.ID == id);
        }
    }
}
