import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { MClogo, menu, close } from '../assets';
import { useTranslation } from 'react-i18next';

import { RiArrowDownSLine, RiCheckLine } from 'react-icons/ri';
import * as Select from '@radix-ui/react-select';
import LocaleContext from '../Context/LocaleContext';

const locales = {
  en: { title: 'EN' },
  ptBR: { title: 'PT-BR' },
};

const navLinks = [
  {
    id: 'about',
  },
  {
    id: 'work',
  },
  {
    id: 'contact',
  },
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const { t, i18n } = useTranslation();

  const { locale } = useContext(LocaleContext);

  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary backdrop-filter backdrop-blur-sm bg-opacity-80`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={MClogo}
            alt="logo"
            className="h-12 w-20 object-contain"
          />
        </Link>

        <div className="inline-flex gap-10">
          <Select.Root
            onValueChange={changeLocale}
            defaultValue={locale}>
            <Select.Trigger
              aria-label="Language"
              className="relative px-2 text-lg leading-none outline-none">
              <div>
                <Select.Value placeholder={locales[locale]?.title} />
                <Select.Icon className="absolute pl-1">
                  <RiArrowDownSLine />
                </Select.Icon>
              </div>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content>
                <Select.Viewport className="bg-gray-800 p-2 rounded-lg shadow-lg">
                  <Select.Group>
                    {Object.keys(locales).map((locale) => (
                      <Select.Item
                        value={locale}
                        key={locale}
                        className="relative flex items-center pr-2 pl-5 py-1 rounded-md text-sm text-secondary focus:cursor-pointer bg-gray-800 focus:bg-gray-500 focus:text-white focus:outline-none select-none">
                        <Select.ItemText>
                          {locales[locale].title}
                        </Select.ItemText>
                        <Select.ItemIndicator className="absolute left-0 w-7 inline-flex items-center text-white">
                          <RiCheckLine />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>

          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.id ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.id)}>
                <a href={`/#${link.id}`}>{t(`Navbar.${link.id}`)}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.id
                        ? 'text-white'
                        : 'text-secondary'
                    } font-poppins font-medium cursor-pointer text-base`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.id);
                    }}>
                    <a href={`#${link.id}`}>
                      {t(`Navbar.${link.id}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
