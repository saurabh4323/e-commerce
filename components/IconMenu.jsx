"use client";
// import Image from "next/image";

const IconMenu = () => {
  const icons = [
    {
      src: "https://www.anveshan.farm/cdn/shop/files/newly_active.svg?v=1713435265&width=60",
      label: "New",
    },
    {
      src: "https://www.anveshan.farm/cdn/shop/files/newly_active.svg?v=1713435265&width=60",
      label: "Ghee",
    },
    {
      src: "https://www.anveshan.farm/cdn/shop/files/newly_active.svg?v=1713435265&width=60",
      label: "Oil",
    },
    {
      src: "https://www.anveshan.farm/cdn/shop/files/newly_active.svg?v=1713435265&width=60",
      label: "Deals",
    },

    {
      src: "https://www.anveshan.farm/cdn/shop/files/newly_active.svg?v=1713435265&width=60",
      label: "₹999",
    },
    {
      src: "https://www.anveshan.farm/cdn/shop/files/newly_active.svg?v=1713435265&width=60",
      label: "All",
    },
  ];

  return (
    <div
      style={{
        display: "flex",

        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {icons.map((icon, index) => (
        <div
          key={index}
          style={{
            textAlign: "center",
            display: "flex",

            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={icon.src}
            alt={icon.label}
            width={60}
            height={60}
            style={{
              border: "1px solid red",
              borderRadius: "50%",
              padding: "3px",
            }}
          />
          <p style={{ marginTop: "10px", fontSize: "14px" }}>{icon.label}</p>
        </div>
      ))}
    </div>
  );
};

export default IconMenu;
