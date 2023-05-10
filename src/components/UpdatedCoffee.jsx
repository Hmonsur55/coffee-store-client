import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatedCoffee = () => {
    const coffee = useLoaderData();
const { _id, name, quantity, photo, supplier, test, category, details } =
        coffee;
  const updateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = {
      name,
      quantity,
      supplier,
      test,
      category,
      details,
      photo,
      };
      
    //   console.log(updateCoffee)
    // post method send data to server

      
    //   fetch(`http://localhost:5000/coffee/${_id}`, {
    //       method: "PUT",
    //       headers: {
    //           "content-type" : "application/json"
    //       },
    //       body: JSON.stringify(updateCoffee)
    //   })
    //       .then(res => res.json())
    //       .then(data => {
    //         console.log(data)
    //       });
      
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "User has been added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="bg-[#f4f3f0] w-4/6 mx-auto p-10">
      <h1 className="font-bold text-3xl">Updated Coffee</h1>
      <form onSubmit={updateCoffee}>
        <div className="flex gap-3 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                name="name"
                type="text"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
                defaultValue={name}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                name="quantity"
                type="text"
                placeholder="Quantity"
                className="input input-bordered w-full"
                defaultValue={quantity}
              />
            </label>
          </div>
        </div>
        <div className="flex gap-3 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={supplier}
                name="supplier"
                type="text"
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Test</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={test}
                name="test"
                type="text"
                placeholder="Test"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-3 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={category}
                name="category"
                type="text"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={details}
                name="details"
                type="text"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-3 mb-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={photo}
                name="photo"
                type="text"
                placeholder="Photo Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="submit" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdatedCoffee;
