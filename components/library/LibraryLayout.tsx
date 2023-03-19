import { useState } from "react";
import { Tab } from "@headlessui/react";
import BookManagement from "./bookManagement/BookManagement";
import IssueReturn from "./issueReturn/IssueReturn";
import UserInfo from "./userInfo/UserInfo";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [libraryManagement] = useState({
    "Book Management": [
      {
        id: 1,
        content: <BookManagement />,
      },
    ],
    "Issue & Return": [
      {
        id: 1,
        content: <IssueReturn />,
      },
    ],
    "User Info": [
      {
        id: 1,
        content: <UserInfo />,
      },
    ],
  });

  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex w-full shadow-Modal  px-6 py-2 bg-white">
          {Object.keys(libraryManagement).map((data) => (
            <Tab
              key={data}
              className={({ selected }) =>
                classNames(
                  " rounded py-3 px-[68px] text-base font-semibold font-urbanist tracking-[0.02em] leading-5  ",
                  " animation focus:outline-none focus:ring-none",
                  selected
                    ? " bg-primary-blue text-white"
                    : "text-primary-jet   "
                )
              }
            >
              {data}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2">
          {Object.values(libraryManagement).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.content}
                    </h3>

                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
