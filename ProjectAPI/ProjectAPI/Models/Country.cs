using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.Models
{
    public class Country
    {
        [Key]
        public int CountryId { get; set; }
        public string Name { get; set; }
    }
}
