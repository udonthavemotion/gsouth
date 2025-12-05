import React from 'react';

export interface HomeModel {
  id: string;
  name: string;
  manufacturer: 'Champion' | 'Sunshine' | 'Franklin' | 'BG' | 'Other';
  type: 'Single Wide' | 'Double Wide' | 'Modular';
  beds: number;
  baths: number;
  sqft: number;
  price?: string; // Optional for mockup
  description: string;
  features: string[];
  imageUrl: string;
  gallery?: string[]; // Array of image URLs for photo gallery
  isFeatured?: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}