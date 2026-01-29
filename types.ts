
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Template {
  id: string;
  title: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
}

export interface Language {
  code: 'ar' | 'en' | 'fr';
  name: string;
  dir: 'rtl' | 'ltr';
}
