import { NextResponse } from 'next/server';

const posts = [
  {
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.'
  },
  {
    title: 'Sample Title 1',
    slug: 'sample-title-1',
    content: 'Sample content for the first object. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.'
  },
  {
    title: 'Sample Title 2',
    slug: 'sample-title-2',
    content: 'Sample content for the second object. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.'
  },
  {
    title: 'Another Example',
    slug: 'another-example',
    content: 'This is another example of dummy data. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.'
  },
  {
    title: 'Test Data 1',
    slug: 'test-data-1',
    content: 'This is test data number 1. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.'
  },
  {
    title: 'Random Entry',
    slug: 'random-entry',
    content: 'Just a random entry with some text. Proin ornare, est eget dignissim iaculis, odio sem vestibulum turpis, ac vulputate ipsum felis quis dui.'
  },
  {
    title: 'Data Item A',
    slug: 'data-item-a',
    content: 'Content for data item A. Cras eu nibh. Suspendisse non nisl sit amet velit hendrerit rutrum. Pellentesque sed dui ut augue blandit sodales.'
  },
  {
    title: 'Example Title',
    slug: 'example-title',
    content: 'Example content for this object. Phasellus sollicitudin. In congue, orci id auctor auctor, tortor orci iaculis neque, at fringilla massa nulla in elit.'
  },
  {
    title: 'Sample Data X',
    slug: 'sample-data-x',
    content: 'This is sample data X. Curabitur nec libero. Fusce neque. Nullam eu risus in erat pulvinar dictum.'
  },
  {
    title: 'Final Entry',
    slug: 'final-entry',
    content: 'This is the last entry in the array. Nulla facilisi. Suspendisse non purus. Cras vel nulla. Donec dolor in est. Curabitur at velit vel sem auctor hendrerit.'
  }
];

export async function GET() {
  return NextResponse.json(posts);
}