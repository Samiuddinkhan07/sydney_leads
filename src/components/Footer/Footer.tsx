
const Footer = () => {
  return (
    <footer className="px-4 pb-8 bg-gradient-to-t from-[#b34b0c]  to-white">
        <div className="flex flex-col md:flex-row gap-4 mx-auto w-[80%]">
            <div className="flex flex-col gap-3 flex-1">
              <h6 className="font-bold">About</h6>
              <ul className="flex flex-col gap-3">
                <li>About Us</li>
                <li>Board & Directors</li>
                <li>Partner Logos</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <h6 className="font-bold">Services</h6>
              <ul className="flex flex-col gap-3">
                <li>TYA- Legal</li>
                <li>TYA- Research</li>
                <li>TYA- Foundation</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <h6 className="font-bold">Get Involved </h6>
              <ul className="flex flex-col gap-3">
                <li>Volunteer</li>
                <li>Membership</li>
                <li>Fundraising</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <h6 className="font-bold">Legal</h6>
              <ul className="flex flex-col gap-3">
                <li>Privacy Policy</li>
                <li>Terms of Use </li>
                <li>Accessibility</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <h6 className="font-bold">Contact</h6>
              <ul className="flex flex-col gap-3">
                <li>contact@youthadvocat</li>
                <li>ABN 123 456 890</li>
                <li>#theyouthadvocate</li>
              </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
