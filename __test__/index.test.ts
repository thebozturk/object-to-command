import { expect } from "chai"
import objectToCommand from '../src/index'

describe('Object To Command Arguments', () => {
  const data = {
    deploymentType: 'build',
    forceUpdate: true,
    silent: false,
    'app-name': 'node',
    '--app-version': '1.0.0',
    '--buildTarget': 'ios',
    deployIt: true
  }
  it('should convert object to command arguments', () => {
    const result = objectToCommand(data)
    expect(result).to.equal(
      ' --deployment-type="build" --force-update --silent="false" --app-name="node" --app-version="1.0.0" --build-target="ios" --deploy-it'
    )
  })
  it('should convert camel case to kebab case', () => {
    const result = objectToCommand({ deploymentType: 'build' })
    expect(result).to.equal(' --deployment-type="build"')
  })
  it('should return just key if value is true', () => {
    const result = objectToCommand({ forceUpdate: true })
    expect(result).to.equal(' --force-update')
  })
  it('if there is a dash in the key, it should not convert it to arguments', () => {
    const result = objectToCommand({ 'app-name': 'node' })
    expect(result).to.equal(' --app-name="node"')
  })
  it('if there is a dash front the key, it should not convert it to arguments', () => {
    const result = objectToCommand({ '--app-name': 'node' })
    expect(result).to.equal(' --app-name="node"')
  })
  it('if there is a dash front the key and its camel case, convert it to arguments', () => {
    const result = objectToCommand({ '--appName': 'node' })
    expect(result).to.equal(' --app-name="node"')
  })
})
