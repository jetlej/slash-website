export default {
  name: 'adhd-hero-h1',
  experimentID: 'whNS0CThSWKSpAs4uCKl7Q',
  isEligible: ({ route }) => route.path.includes('adhd'),
  variants: [
    { weight: 20 },
    { weight: 20, text: 'The digital cure for ADHD' },
    { weight: 20, text: 'Get distracted easily?' },
    { weight: 20, text: 'Got ADHD?' },
    { weight: 20, text: 'Distracted right now?' }
  ]
}
