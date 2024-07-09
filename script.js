const tabsData = [
  {
    id: 1,
    title: "Tab 1",
    content:
      "Tab 1 content data please add more data here ...all data tab 1 data will be rendred here only",
  },
  {
    id: 2,
    title: "Tab 2",
    content:
      "Tab 2 content data please add more data here ...all data tab 2 data will be rendred here only",
  },
  {
    id: 3,
    title: "Tab 3",
    content:
      "Tab 3 content data please add more data here ...all data tab 3 data will be rendred here only",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const tabContainer = document.getElementById("tabs-container");
  const tabContentContainer = document.getElementById("tabs-content-container");
  let activeTab = tabsData[0].id;

  const renderTabs = () => {
    tabsData.forEach((tab) => {
      const tabButton = document.createElement("button");
      tabButton.innerText = tab.title;
      tabButton.classList = `tabLinks ${activeTab == tab.id ? "active" : ""}`;
      tabButton.setAttribute("data-tab-id", tab.id);
      tabContainer.appendChild(tabButton);

      const tabContent = document.createElement("div");
      tabContent.innerHTML = `<h1>${tab.title}</h1> <p>${tab.content}</p>`;
      tabContent.classList = `tabContent ${
        activeTab == tab.id ? "active" : ""
      }`;
      tabContent.id = tab.id;

      tabContentContainer.appendChild(tabContent);
    });
  };
  renderTabs();

  tabContainer.addEventListener("click", (e) => {
    const currentElement = e.target;
    const currentTabId = currentElement.getAttribute("data-tab-id");
    if (
      currentElement.matches(".tabLinks") &&
      currentTabId &&
      activeTab != currentTabId
    ) {
      activeTab = currentTabId;
      const ativeElements = document.querySelectorAll(
        ".tabLinks.active, .tabContent.active"
      );

      ativeElements.forEach((elm) => elm.classList.remove("active"));

      currentElement.classList.add("active");
      document.getElementById(activeTab)?.classList.add("active");
    }
  });
});
