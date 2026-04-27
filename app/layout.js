import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'WearMeOut — Premium T-Shirt Printing',
  description: 'Bold, custom-printed T-shirts made for those who wear their identity. Premium streetwear printing — designed by you, crafted by us.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
