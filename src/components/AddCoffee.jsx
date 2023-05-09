
const AddCoffee = () => {
    return (
      <div>
        <h1>add coffee</h1>
        <form>
          <div className="flex gap-3 w-4/6 mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">coffee name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="coffee name"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    );
};

export default AddCoffee;