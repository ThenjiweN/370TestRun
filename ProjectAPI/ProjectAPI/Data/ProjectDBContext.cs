using Microsoft.EntityFrameworkCore;
using ProjectAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.Data
{
    public class ProjectDBContext : DbContext
    {
        public ProjectDBContext(DbContextOptions<ProjectDBContext> options) : base(options)
        {

        }

    
        public DbSet<Allergen> Allergens { get; set; }
        public DbSet<BlogEntry> BlogEntries { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<HairCondition> HairConditions { get; set; }
        public DbSet<HairDensity> HairDensities { get; set; }
        public DbSet<HairLength> HairLengths { get; set; }
        public DbSet<InventoryItem> InventoryItems { get; set; }
        public DbSet<InventoryType> InventoryTypes { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<Province> Provinces { get; set; }
        public DbSet<Subhurb> Subhurbs { get; set; }
        public DbSet<ReturnReason> ReturnReasons { get; set; }
        public DbSet<UserRoles> UserRoles { get; set; }
    }
}
