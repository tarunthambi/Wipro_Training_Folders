namespace CustomerService.Exceptions
{
    public class CustomerNotFoundException:ApplicationException
    {
        public CustomerNotFoundException(int id) 
            :base($"Customer with id {id} not found")
                { }
        
    }
}
