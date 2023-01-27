const pittsburgh = [
  [
    "Vishaal Komaragiri & Nithin Bhandari",
    "vkomaragiri@nastudents.org, nbhandari2@nastudents.org",
    "Franklin Park, PA",
    "North Allegheny",
    "Ingomar MS",
  ],
  [
    "Aditya Mallepalli",
    "amallepalli2@nastudents.org",
    "North Allegheny",
    "Carson MS",
  ],
  [
    "Nithin Bhandari",
    "nbhandari2@nastudents.org",
    "North Allegheny",
    "Franklin Elementary",
  ],
  [
    "Ishan Bansal",
    "ibansal@nastudents.org",
    "North Allegheny",
    "Bratford Woods Elementary",
  ],
  [
    "Ishan Bansal",
    "ibansal@nastudents.org",
    "Wexford, PA",
    "North Allegheny",
    "Marshall Elementary",
  ][
    ("Anshul Shah",
    "ashah2@nastudents.org",
    "North Allegheny",
    "Marshall Middle")
  ],
  [
    "Joseph Widjaja",
    "josephwidjaja100@gmail.com",
    "North Allegheny",
    "Mcknight",
  ],
  ["Darren Wang", "wdy938@hamptontalbots.org", "Hampton"],
  ["William Rice", "ricewilliam125@gmail.com", "Fox Chapel"],
  ["Adhi Thirumala", "adhi.thirumala@gmail.com", "Fox Chapel"],
  ["Rohini Pillai", "rohinip2016@gmail.com", "Avonworth"],
  ["Vivan Poddar", "vivanneil@outlook.com", "Shady Side Academy"],
];
let table = `<h1 style="font-size: 25px; padding-bottom: 10px; color: #e2b742">
${regionName}
</h1>
<h3
  style="
    font-size: 18px;
    cursor: pointer;
    padding-bottom: 10px;
    text-decoration: underline;
  "
  id="paRegDirector"
  class="regDirectorBtn"
>
  Meet the regional directors <i class="fas fa-angle-right"></i>
</h3>

<table class="table">
  <thead>
    <tr>
      <th style="width: 50px !important"></th>
      <th style="width: 47%" scope="col">Chapter</th>
      <th style="width: 22%" scope="col">Location</th>
      <th scope="col">School District</th>
    </tr>



  </thead>
  <tbody>
  </tbody>
</table>`;

const tr = `
    <tr
      class="dropdownRow"
      href="#${chapterNameId}"
      role="button"
      aria-expanded="false"
      aria-controls="${chapterNameId}"
    >
      <td class="downCaret"><i class="fas fa-caret-down"></i></td>
      <td>${chapterName}</td>
      <td>${regionName}</td>
      <td>${schoolDistrict}</td>
    </tr>
    <tr class="collapse" id="${chapterNameId}">
      <td colspan="4" style="padding-left: 50px; padding-top: 20px">
        <h1 style="font-size: 25px; padding-bottom: 20px">Chapter Organizer</h1>
        <p style="float: left; padding-top: 20px">
				${chapterHead}
          <a
            style="padding-left: 10px"
            href="${chapterHeadEmail}"
            ><i class="fas fa-envelope"></i
          ></a>
        </p>
        <br /><br />
      </td>
    </tr>
`;
