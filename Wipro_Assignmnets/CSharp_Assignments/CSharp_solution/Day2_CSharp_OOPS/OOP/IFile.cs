using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day2_CSharp_OOPS.OOP
{
    internal interface IFile
    {
        void Write(object data);
        void Read();
    }
}
