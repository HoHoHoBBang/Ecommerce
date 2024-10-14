import {
  faComments,
  faEnvelope,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <p className="my-5 text-center text-2xl font-bold sm:text-3xl">
        CONTACT US
      </p>
      <div className="my-10 mt-5 flex flex-col gap-5 sm:flex-row">
        <div className="flex flex-1 flex-col items-center justify-start gap-2 rounded-lg border p-5">
          <FontAwesomeIcon icon={faSquarePhone} className="text-3xl" />
          <p className="bg-black px-3 py-1 text-white">BY PHONE</p>
          <p>+82-10-4739-6066</p>
          <p>Mon - Sat 9am ~ 6pm</p>
          <p>Sun Closed</p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-start gap-2 rounded-lg border p-5">
          <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
          <a
            href="mailto:gogogoidl@naver.com"
            className="cursor-pointer bg-black px-3 py-1 text-white"
          >
            EMAIL US
          </a>
          <p className="">gogogoidl@naver.com</p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-start gap-2 rounded-lg border p-5">
          <FontAwesomeIcon icon={faComments} className="text-3xl" />
          <a
            href="https://open.kakao.com/o/sedVWRHg"
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer bg-black px-3 py-1 text-white"
          >
            LIVE CHAT
          </a>
          <p>Mon - Sun</p>
          <p>24 Hours / 7 Days a Week</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
