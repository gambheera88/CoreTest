using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core_Sample.Controllers;
using Xunit;
using Xunit.Abstractions;

namespace unitTests
{
    public class ValuesController_Get
    {
        [Fact]
        public void ShouldReturnTwoValues()
        {
            var valController = new ValuesController();
            var result = valController.Get();

            Assert.Equal(2, result.Count());
        }
    }
}
