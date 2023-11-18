// const fullName = document.querySelector(".name");
// const dateOfBirth = document.querySelector(".birth-date");
// const gender = document.querySelector(".select-gender");
// const maritalStatus = document.querySelector(".select-status");
// const phoneNumber = document.querySelector(".phone-number");
// const email = document.querySelector(".email");
// const city = document.querySelector(".city");
// const quater = document.querySelector(".quater-name");
// const address = document.querySelector(".first-address");
// const address2 = document.querySelector(".second-address");
// const university = document.querySelector(".education-level");
// const degree = document.querySelector(".degree");
// const level = document.querySelector(".select-level");
// const additionalInfo = document.querySelector(".addition-info");
// const btnSubmit = document.querySelector(".submit-btn");

// const companyName = document.querySelector(".company-name");
// const jobType = document.querySelector(".job-type");
// const jobCategory = document.querySelector(".job-caterogy");
// const city = document.querySelector(".city");
// const quater = document.querySelector(".quater-name");
// const email = document.querySelector(".email");
// const phoneNumber = document.querySelector(".phone-number");
// const webside = document.querySelector(".website");
// const companyDescription = document.querySelector(".addition-info");
// const btnSubmit = document.querySelector(".submit-btn");

// $(".submit-btn").click(function (e) {
//         e.preventDefault();
//         var fullName = $(".name").val();
//         var dateOfBirth = $(".birth-date").val();
//         var gender = $(".select-gender").val();
//         var maritalStatus = $(".select-status").val();
//         var phoneNumber = $(".phone-number").val();
//         var email = $(".email").val();
//         var city = $(".city").val();
//         var quater = $(".quater-name").val();
//         var address = $(".first-address").val();
//         var address2 = $(".second-address").val();
//         var university = $(".education-level").val();
//         var degree = $(".degree").val();
//         var level = $(".select-level").val();
//         var additionalInfo = $(".addition-info").val();
//         var url = "employeesProfiles.json";

//         $.post(url, {
//           fullName: fullName,
//           dateOfBirth: dateOfBirth,
//           gender: gender,
//           maritalStatus: maritalStatus,
//           phoneNumber: phoneNumber,
//           email: email,
//           city: city,
//           quater: quater,
//           address: address,
//           university: university,
//           degree: degree,
//           level: level,
//           additionalInfo: additionalInfo,
//         }).done(function (data) {
//           console.log("Post Saved");
//           console.log(data);
//         });
//       });

// $.getJSON("employeesProfiles.json", function (data) {
//   // console.log(data);
//   // $.each(data, function (i, user) {
//   //   console.log(user.fullName);
//   // });
//   $(".submit-btn").click(function (e) {
//     e.preventDefault();
//     if (
//       fullName.value == "" &&
//       dateOfBirth.value == "" &&
//       gender.value == "" &&
//       maritalStatus.value == "" &&
//       phoneNumber.value == "" &&
//       email.value == "" &&
//       city.value == "" &&
//       quater.value == "" &&
//       address.value == "" &&
//       address2.value == ""
//     ) {
//       console.log("You need to fill the required forms");
//     } else {

//       // const newProfile = {
//       //   id: 2,
//       //   fullName: `${fullName}`,
//       //   dateOfBirth: `${dateOfBirth}`,
//       //   gender: `${gender}`,
//       //   maritalStatus: `${maritalStatus}`,
//       //   phoneNumber: `${Number(phoneNumber)}`,
//       //   email: `${email}`,
//       //   city: `${city}`,
//       //   quater: `${quater}`,
//       //   address: `${address}`,
//       //   address2: `${address2}`,
//       //   university: `${university}`,
//       //   degree: `${degree}`,
//       //   level: `${level}`,
//       //   additionalInfo: `${additionalInfo}`,
//       // };
//       // data.push(newProfile);

//       // const updatedJsonData = JSON.stringify(data);

//       // $.ajax({
//       //   type: "POST",
//       //   url: "employeesProfiles.json",
//       //   data: updatedJsonData,
//       //   dataType: "json",
//       //   contentType: "application",
//       //   success: function () {
//       //     console.log("JSON file updated successfully.");
//       //   },
//       //   error: function () {
//       //     console.error("Error updating JSON file:", error);
//       //   },
//       // });
//     }
//   });
//   console.log(data);
// });
