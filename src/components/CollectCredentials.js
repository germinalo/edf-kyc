// Frameworks
import React, { Component } from 'react'
import { uport } from '../utilities/uportSetup'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../actions/AppActions'

import styled from 'styled-components'

const CredentialsWrap = styled.section`
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    position: inherit;
  }
`
const CredentialsArea = styled.section`
  text-align: center;
`
const CredsTable = styled.table`
  margin: auto;
  text-align: left;
`

const CredsLabel = styled.label`
  position: relative;
  top: 10px;
`

const CredsButton = styled.button`
  margin-top: 20px;
`

const NextButton = styled.button`
  margin-top: 20px;
`

const SubText = styled.p`
  margin: 20px auto 3em auto;
  font-size: 18px;
`

const ADRESSCLAIM = '1 Carrefour Pleyel 93000 ST DENIS'

class CollectCredentials extends Component {

  constructor (props) {
    super(props)
    this.credentialsbtnClickC = this.credentialsbtnClickC.bind(this)
  }

  credentialsbtnClickC () {
    uport.attestCredentials({
      sub: this.props.uport.address,
      claim: {Adresse: ADRESSCLAIM},
      exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000,  // 30 days from now
      uriHandler: (log) => { console.log(log) }
    })
  }

  render (props) {
    return (
      <CredentialsWrap>
        <h4>Faites certifier votre adresse</h4>
        <CredentialsArea>
          <CredsTable>
            <tbody>
              <tr>
                <td style={{"paddingRight":"8em"}}>
                  <CredsLabel>Name: {this.props.uport.name}</CredsLabel>
                </td>
              </tr>
              <tr>
                <td>
                  <CredsLabel>Nationalité: {this.props.uport.country}</CredsLabel>
                </td>
              </tr>
              <tr>
                <td>
                  <CredsLabel>Addresse: {ADRESSCLAIM}</CredsLabel>
                </td>
                </tr>
                <tr>
                <td>
                  <CredsButton onClick={this.credentialsbtnClickC}>Obtenir justificatif domicile</CredsButton>
                </td>
              </tr>
            </tbody>
          </CredsTable>
          <NextButton onClick={this.props.actions.credentialsDemoComplete}>Log out</NextButton>
        </CredentialsArea>
        <SubText>Le certificat peut mettre un peu de temps à arriver, soit patient Joe !</SubText>
      </CredentialsWrap>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.App.uport
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CollectCredentials)
