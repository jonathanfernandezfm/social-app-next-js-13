import { NextResponse } from 'next/server';

const posts = [
  {
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
  },
  {
    title: 'Sample Title 1',
    slug: 'sample-title-1',
    content: 'Sample content for the first object.'
  },
  {
    title: 'Sample Title 2',
    slug: 'sample-title-2',
    content: 'Sample content for the second object.'
  },
  {
    title: 'Another Example',
    slug: 'another-example',
    content: 'This is another example of dummy data.'
  },
  {
    title: 'Test Data 1',
    slug: 'test-data-1',
    content: 'This is test data number 1.'
  },
  {
    title: 'Random Entry',
    slug: 'random-entry',
    content: 'Just a random entry with some text.'
  },
  {
    title: 'Data Item A',
    slug: 'data-item-a',
    content: 'Content for data item A.'
  },
  {
    title: 'Example Title',
    slug: 'example-title',
    content: 'Example content for this object.'
  },
  {
    title: 'Sample Data X',
    slug: 'sample-data-x',
    content: 'This is sample data X.'
  },
  {
    title: 'Final Entry',
    slug: 'final-entry',
    content: 'This is the last entry in the array.'
  }
];

export async function GET() {
  return NextResponse.json(posts);
}