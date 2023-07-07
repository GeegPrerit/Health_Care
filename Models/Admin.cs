﻿using System.ComponentModel.DataAnnotations;

namespace DoctorPatients.Models
{
    public class Admin
    {

        [Key]
        public int Id { get; set; }
        public string? UserName { get; set; }

        public string? Password { get; set; }   

        public string? Email { get; set; }
        public string? Phone { get; set; }

        


    }
}
