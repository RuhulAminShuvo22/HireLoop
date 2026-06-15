"use client";

const FilterSidebar = ({
  categories,
  categoryFilter,
  setCategoryFilter,
  setSearchTerm,
  jobs,
  activeJobs,
  remoteJobs,
  averageSalary,
}) => {
  return (
    <div
      className="
      bg-[#FFFDF8]
      border
      border-[#E7DCC7]
      rounded-3xl
      p-6
      sticky
      top-6
      h-fit
      shadow-sm
    "
    >
      <h3
        className="
        text-xl
        font-bold
        text-[#2B2111]
        mb-8
      "
      >
        Filters
      </h3>

      <div>
        <h4
          className="
          text-sm
          uppercase
          tracking-wider
          text-[#6B5B45]
          mb-4
        "
        >
          Categories
        </h4>

        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="
              flex
              items-center
              gap-3
              cursor-pointer
              text-[#6B5B45]
              hover:text-[#2B2111]
              transition
            "
            >
              <input
                type="radio"
                name="category"
                checked={categoryFilter === category}
                onChange={() =>
                  setCategoryFilter(category)
                }
                className="
                w-4
                h-4
                accent-[#D4A64F]
              "
              />

              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-[#E7DCC7] mt-8 pt-8">
        <button
          onClick={() => {
            setSearchTerm("");
            setCategoryFilter("All");
          }}
          className="
          w-full
          py-3
          rounded-xl
          bg-[#D4A64F]
          text-white
          font-semibold
          transition
        "
        >
          Reset Filters
        </button>
      </div>

      <div className="border-t border-[#E7DCC7] mt-8 pt-8 space-y-4">
        <div>
          <p className="text-[#6B5B45] text-sm">
            Total Jobs
          </p>
          <h3 className="text-2xl font-bold text-[#2B2111]">
            {jobs.length}
          </h3>
        </div>

        <div>
          <p className="text-[#6B5B45] text-sm">
            Active Jobs
          </p>
          <h3 className="text-2xl font-bold text-green-600">
            {activeJobs}
          </h3>
        </div>

        <div>
          <p className="text-[#6B5B45] text-sm">
            Remote Jobs
          </p>
          <h3 className="text-2xl font-bold text-blue-600">
            {remoteJobs}
          </h3>
        </div>

        <div>
          <p className="text-[#6B5B45] text-sm">
            Average Salary
          </p>
          <h3 className="text-2xl font-bold text-[#D4A64F]">
            ${averageSalary.toLocaleString()}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;