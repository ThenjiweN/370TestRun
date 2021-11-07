using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectToo.Entities
{
    public class InventoryType
    {
        [Key]
        public int TypeID { get; set; }
        public string Name { get; set; }
    }
}
