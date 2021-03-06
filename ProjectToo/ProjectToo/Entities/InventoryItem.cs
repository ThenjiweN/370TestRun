using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectToo.Entities
{
    public class InventoryItem
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        public string ItemDesc { get; set; }

        [ForeignKey("TypeID")]
        public int TypeID { get; set; }
        public InventoryType InventoryType { get; set; }
    }
}
