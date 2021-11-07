using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectToo.Entities
{
    public class Product
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        public string ProductDesc { get; set; }
        public float Price { get; set; }
        public byte[] Image { get; set; }

        [ForeignKey("TypeID")]
        public int TypeID { get; set; }
        public ProductType ProductType { get; set; }
    }
}
