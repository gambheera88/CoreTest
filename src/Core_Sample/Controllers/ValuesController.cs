using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace Core_Sample.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        //[EnableCors]
        [HttpGet]
        public IEnumerable<person> Get()
        {
            return new person[]
            {
                new person() { FirstName = "Lahiru", LastName = "Gambheera", Gender = "Male"},
                new person() { FirstName = "Thilinika", LastName = "Asanthi", Gender = "Female"},
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]person value)
        {
            int a = 5;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]person value)
        {
            int a = 5;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            int a = 5;
        }
    }

    public class person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
    }
}
