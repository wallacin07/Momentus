import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../baseComponents/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(open => !open);
  const goLogin   = () => router.push('/authentification');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Recursos', href: '#features' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Como Funciona', href: '#how-it-works' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="font-playfair text-2xl font-semibold">
            Momentus
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(l => (
              <a key={l.name} href={l.href} className="text-sm font-medium hover-underline">
                {l.name}
              </a>
            ))}
          </nav>

          {/* Login Desktop */}
          <div className="hidden md:block">
            <Button className="btn-primary" onClick={goLogin}>
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md focus:ring-2 focus:ring-primary"
            onClick={toggleMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (corrigido) */}
      <div
        className={cn(
          'md:hidden absolute top-full inset-x-0 z-50 transition',
          isOpen ? 'block' : 'hidden'
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navLinks.map(l => (
            <a
              key={l.name}
              href={l.href}
              className="block px-3 py-2 rounded-md font-medium hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {l.name}
            </a>
          ))}

          {/* Login Mobile */}
          <Link href="/authentification">
            <Button className="btn-primary w-full inline-flex items-center justify-center px-4 py-2 rounded">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
