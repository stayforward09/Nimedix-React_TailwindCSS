import React from 'react'
import PartnerCard from '../../components/PartnerCard'
import NearLogo from '../../assets/images/partner/near.png'
import GenBankLogo from '../../assets/images/partner/gen_bank.png'
import BurstIQLogo from '../../assets/images/partner/burst_iq.png'
import BoundlessPayLogo from '../../assets/images/partner/boundless_pay.png'
import AllianceLogo from '../../assets/images/partner/alliance.png'
import PinkSaleLogo from '../../assets/images/partner/pink_sale.png'
import ClinicBancLogo from '../../assets/images/partner/clinic_banc.png'

const PartnerSection = () => {
  return (
    <div id="partner-section" className="w-full bg-white sm:py-24 py-12">
      <div className="container mx-auto text-center">
        <p className="title lg:text-7xl md:text-5xl text-4xl text-dark my-10">
          Our Partners
        </p>
        <p className="text-grey md:text-2xl text-base">
          We’ve partnered with market leading providers in the medical,
          <br />
          Artificial Intelligence and Blockchain market to build a lasting
          solution.
        </p>
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 my-8">
          <PartnerCard logo={NearLogo} />
          <PartnerCard logo={GenBankLogo} />
          <PartnerCard logo={BurstIQLogo} />
          <PartnerCard logo={BoundlessPayLogo} />
          <PartnerCard logo={AllianceLogo} />
          <PartnerCard logo={PinkSaleLogo} label="PinkSale" />
          <PartnerCard logo={ClinicBancLogo} label="Clinic Banc" />
        </div>
      </div>
    </div>
  )
}

export default PartnerSection