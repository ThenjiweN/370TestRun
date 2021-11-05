using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.Models
{
    public class UserRoles
    {
        [Key]
        public int RoleId { get; set; }
        public string Name { get; set; }
    }
}
