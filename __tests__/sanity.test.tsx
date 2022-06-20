import renderer from 'react-test-renderer'

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<h1>Hello World!</h1>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
