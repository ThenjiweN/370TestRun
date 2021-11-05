using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.Models
{
    public class Subhurb
    {
        [Key]
        public int SubhurbId{ get; set; }
        public string Name { get; set; }
        [ForeignKey("CityId")]
        public int CityId { get; set; }
        public City City { get; set; }
    }
}
