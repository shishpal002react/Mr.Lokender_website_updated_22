import axios from "axios";

const Razorpay = ({cartDetails}) => {
//   var options = {
//     key: "rzp_test_zonUGKKEMdtrEx", // Enter the Key ID generated from the Dashboard
//     amount: event.price * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     currency: "INR",
//     name: event.title,
//     description: "Test for Integration",
//     image: event.productimage[0],
//     handler: function (response) {
//       // alert(response.razorpay_payment_id);
//       // alert(response.razorpay_order_id);
//       // alert(response.razorpay_signature)
//     },
//     // prefill: {
//     //   name: "Manoj Kushwah",
//     //   email: "gaurav.kumar@example.com",
//     //   contact: "9999999999",
//     // },
//     notes: {
//       address: "Razorpay Corporate Office",
//     },
//     theme: {
//       color: "#3399cc",
//     },
//   };
//   var rzp1 = new window.Razorpay(options);
//   rzp1.on("payment.failed", function (response) {
//     // alert(response.error.code);
//     // alert(response.error.description);
//     // alert(response.error.source);
//     // alert(response.error.step);
//     // alert(response.error.reason);
//     // alert(response.error.metadata.order_id);
//     // alert(response.error.metadata.payment_id);
//   });
//   rzp1.open();

// const checkoutHandler = async (amount) => {

//   const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

//   const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
//       amount
//   })

  const options = {
      key:cartDetails.key,
      amount: cartDetails.totalAmount * 100,
      currency: "INR",
      name: cartDetails.title,
      description: "Tutorial of RazorPay",
      image: cartDetails.productimage[0],
      order_id: cartDetails.id,
      callback_url: "https://lokender-backend-api.vercel.app/api/v1/orders/64b278d63317f02debc35292/razorpay",
      prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999"
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#121212"
      }
  };
  const razor = new window.Razorpay(options);
  razor.open();

 };
export default Razorpay;
