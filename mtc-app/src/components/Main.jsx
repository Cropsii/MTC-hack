import React from "react";

const Main = ({ data }) => {
  return (
    <main className="p-4">
      <div className="max-w-screen-xl mx-auto">
        <ul className="space-y-4">
          {data.length === 0 ? (
            <p>No items found</p>
          ) : (
            data.map((item) => (
              <li key={item.id} className="p-4 border rounded-lg">
                {item.name}
              </li>
            ))
          )}
        </ul>
      </div>
    </main>
  );
};

export default Main;
