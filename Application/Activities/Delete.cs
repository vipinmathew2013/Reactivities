using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public Guid Id { get; set; }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var acitivity=await _context.Activities.FindAsync(request.Id);
                
                _context.Remove(acitivity);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}