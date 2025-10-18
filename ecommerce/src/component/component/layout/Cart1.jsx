import { useState, useEffect } from "react";
import { useFirst } from "../../Context/FIrstContext";
import SwiperComp1 from "./SwiperComp";
import UpdateUser from "./UpdateUser";
import { useNavigate } from "react-router-dom";

const FlashSale = () => {
  const { alluser, deleteUser } = useFirst();
  const [showDelete, setShowDelete] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});
  const navigate = useNavigate();

  // Set your flash sale target date here
  const targetDate = new Date("2025-09-10T00:00:00");

  // Function to calculate time left
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return { days: "07", hours: "11", minutes: "30", seconds: "12" };

    const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  // Update timer every second
  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const productData = [
    { name: "HAVIT HV-G92 Gamepad", price: "120", discount: "40%", rating: "88", disprc: "165", image: "/Assets/Console1.svg" },
    { name: "AK-900 Wired Keyboard", price: "960", discount: "35%", rating: "75", disprc: "1160", image: "/Assets/Console2.svg" },
    { name: "IPS LCD Gaming Monitor", price: "370", discount: "30%", rating: "99", disprc: "400", image: "/Assets/Console3.svg" },
    { name: "S-Series Comfort Chair", price: "375", discount: "25%", rating: "99", disprc: "400", image: "/Assets/Console4.svg" },
    { name: "S-Series Comfort Chair", price: "375", discount: "25%", rating: "99", disprc: "400", image: "/Assets/Console4.svg" },
    { name: "S-Series Comfort Chair", price: "375", discount: "25%", rating: "99", disprc: "400", image: "/Assets/Console4.svg" },
    { name: "AK-900 Wired Keyboard", price: "960", discount: "35%", rating: "75", disprc: "1160", image: "/Assets/Console2.svg" },
    { name: "AK-900 Wired Keyboard", price: "960", discount: "35%", rating: "75", disprc: "1160", image: "/Assets/Console2.svg" },
    { name: "S-Series Comfort Chair", price: "375", discount: "25%", rating: "99", disprc: "400", image: "/Assets/Console4.svg" },
  ];

  if (!alluser) return null;

  const timerUnits = [
    { label: "Days", value: timeLeft.days || "07" },
    { label: "Hours", value: timeLeft.hours || "11" },
    { label: "Minutes", value: timeLeft.minutes || "30" },
    { label: "Seconds", value: timeLeft.seconds || "12", noDots: true },
  ];

  return (
    <div className="w-full max-w-[1470px] mx-auto px-4 md:px-10 flex flex-col gap-6 mt-[116px]">
      {/* Heading */}
      <div className="flex flex-row items-center gap-3 text-[#DB4444]">
        <div className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444]"></div>
        <span className="font-medium text-[16px]">Today's</span>
      </div>

      {/* Title + Timer */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
        <div className="text-[36px] mt-4 font-semibold">Flash Sale</div>

        <div className="flex flex-row gap-7 mr-200 items-center">
          {timerUnits.map((unit, i) => (
            <div key={i} className="flex flex-col pt-0 gap-0">
              <div className="text-[12px]">{unit.label}</div>
              <div className="text-[32px] flex flex-row gap-4 items-center">
                <span>{unit.value}</span>
                {!unit.noDots && (
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="rounded-full w-[5px] h-[5px] bg-[#E07575]"></div>
                    <div className="rounded-full w-[5px] h-[5px] bg-[#E07575]"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Swiper Product List */}
      <div className="w-full">
        <SwiperComp1 data={productData} />
      </div>

      <div className="w-full flex justify-center mt-12">
        <button className="bg-[#DB4444] text-white px-7 py-3 cursor-pointer rounded-md">
          View All Categories
        </button>
      </div>

      {/* All Users List */}
      <div>
        <span>All users data</span>
        <section>
          {alluser.map((user, index) => (
            <div key={user._id} className="flex gap-3 items-center">
              <span>{index}</span>
              <div className="flex flex-row w-fit-content gap-3 items-center text-center">
                <div className="flex flex-col w-[90px] gap-1">
                  <span className="font-bold text-lg">{user.email}</span>
                  <span className="w-fit h-fit text-center">{user.username}</span>
                </div>

                <button
                  className="text-white ml-40 bg-red-400 rounded-lg px-5 py-3 cursor-pointer"
                  onClick={() => setShowDelete(true)}
                >
                  Delete
                </button>

                <button
                  onClick={() => {
                    setUpdateData(user);
                    setShowUpdate(true);
                  }}
                >
                  Update
                </button>

                <button onClick={() => navigate(`/user/${user._id}`)}>Show page</button>
              </div>

              {showDelete && (
                <div className="fixed inset-0 z-[9999] bg-transparent w-full h-full">
                  <div className="absolute left-[30%] top-[30%] flex flex-col bg-black text-white gap-5 w-[45%] p-6">
                    <span>
                      Are you sure you want to delete the data of user {user.email}?
                    </span>
                    <div className="flex justify-between w-full">
                      <button
                        className="text-white p-2 shadow-md bg-red-300"
                        onClick={() => {
                          deleteUser(user._id);
                          setShowDelete(false);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => setShowDelete(false)}
                        className="p-2 shadow-md bg-red-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>

      {showUpdate && <UpdateUser data={updateData} hideFunction={() => setShowUpdate(false)} />}
    </div>
  );
};

export default FlashSale;
