import Swal from "sweetalert2";


const CoffeeCard = ({ coffee }) => {
    const { _id , name, quantity, photo, supplier, test, category, details } =
      coffee;
// delete method
    const deletedCoffee = (_id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
              
             fetch(`http://localhost:5000/coffee/${_id}`, {
                 method: "DELETE",
                 
            }).then(res => res.json())
            .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        
                    }
                });
              
              
          }
           
        });
    };


    return (
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={photo} alt="Movie" />
          </figure>
          <div className="flex justify-between items-center gap-8 w-full px-5">
            <div>
              <p className="card-title">{name}</p>
              <p>{quantity}</p>
              <p>{supplier}</p>
              <p>{test}</p>
              <p>{category}</p>
              <p>{details}</p>
            </div>
            <div className="card-actions justify-end ">
              <div className="btn-group btn-group-vertical space-y-4">
                <button className="btn">View</button>
                <button className="btn">Edit</button>
                <button
                  className="btn bg-[red]"
                  onClick={()=> deletedCoffee(_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;