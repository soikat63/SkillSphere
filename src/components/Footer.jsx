import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold">SkillSphere</h2>
          <p className="text-sm text-gray-400 mt-2">
            Upgrade your skills with industry-level courses. Learn smarter, grow
            faster 🚀
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/profile">My Profile</Link>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-400">
            Email: support@skillsphere.com
          </p>
          <p className="text-sm text-gray-400">Phone: +880 1234-567890</p>

          {/* Social */}
          <div className="flex gap-4 mt-4 text-sm">
            <a href="#" className="hover:text-gray-300">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-300">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-300">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>

        <div className="flex justify-center gap-4 mt-2">
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
