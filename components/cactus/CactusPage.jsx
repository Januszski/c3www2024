"use client";
import Image from "next/image";

// export default function Cactus() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <img
//         src='/pictures/cactus.jpg'
//         alt='Cactus'
//         style={{ width: "200px", height: "auto" }}
//       />{" "}
//       {/* Adjust size as needed */}
//       <h1 style={{ fontFamily: "Cactus", fontSize: "6rem" }}>
//         CACTUS IS HEREEEEEEE
//       </h1>
//     </div>
//   );
// }
export default function Cactus() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src='/pictures/dancing-cactus.gif'
        alt='CDCare Hospital Building'
        className='rounded-lg shadow-lg object-cover w-full h-full'
      />
      <h1 style={{ fontFamily: "Cactus", fontSize: "6rem" }}>
        CACTUS IS HEREEEEEEE
      </h1>
    </div>
  );
}
