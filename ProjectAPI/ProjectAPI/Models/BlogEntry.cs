using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.Models
{
    public class BlogEntry
    {
        [Key]
        public int ID { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Date { get; set; }
        public string Image { get; set; }
    }
}
