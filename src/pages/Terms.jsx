import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms & Conditions - Nixwoker Bespoke';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Read Nixwoker Bespoke Terms & Conditions. Understand our policies on purchases, returns, shipping, and more.');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-black h-[110px] md:h-[220px] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wider text-white">
            Terms & Conditions
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="text-sm text-gray-700">
            <Link to="/" className="hover:text-primary-black transition-colors">Home</Link>
            <span className="mx-2"></span>
            <span className="text-gray-900 font-medium">Terms & Conditions</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-wider text-primary-black">
              NIXWOKER BESPOKE – TERMS & CONDITIONS
            </h2>
          </div>

          {/* Introduction */}
          <div className="mb-12 space-y-4 text-sm md:text-base text-gray-800 leading-7">
            <p className="font-semibold">
              By using this website (https://www.nixwokerbespoke.com/), you agree to be bound by the following terms and conditions. These terms affect your legal rights, responsibilities and liabilities, so please read these terms carefully and ensure that you understand them. If you do not agree to any of the terms given below, please cease your use of this website immediately.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h3 className="text-2xl font-black text-primary-black mb-6">1. GENERAL</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>
                  <strong>1.1</strong> This website (www.nixwokerbespoke.com) (hereinafter the "Website") is owned, operated and administered by Nixwoker Bespoke (hereinafter "Nixwoker"), a company based in Galashiels, Scotland, UK company number SC126791 (registered in Scotland).
                </p>
                <p>
                  <strong>1.2</strong> Please review the following Terms and Conditions carefully before using the Website and/or making a purchase from our premises. Your use of the website or making a purchase from our premises indicates your agreement to comply with and be bound by these Terms and Conditions.
                </p>
                <p>
                  <strong>1.3</strong> You must also confirm your acceptance of the Terms and Conditions, in full, before purchasing on this Website. This is done by reviewing our terms and privacy policy and clicking the 'I have read and agree to the Terms & Privacy' tick box before making your payment at checkout.
                </p>
                <p>
                  <strong>1.4</strong> Except as otherwise provided, the Terms and Conditions are subject to change at any time and your continued visits to our website after the implementation of any change(s) constitutes your acceptance of such change(s).
                </p>
                <p>
                  <strong>1.5</strong> If you have any difficulty in understanding these Terms and Conditions, or you do not agree with the contents thereof, we ask that you contact us.
                </p>
                <p>
                  <strong>1.6</strong> Hereinafter, the following terms are used within these terms and conditions:
                </p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>The 'Customer' is the person, firm or company with whom a sale is made by Nixwoker, whether directly or indirectly through an agent.</li>
                  <li>The 'Contract' is the exchange of money for goods and services provided by Nixwoker which are bound by following the terms and conditions</li>
                  <li>The 'Product(s)' is the item(s) or good(s) sold to the Customer by Nixwoker</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-2xl font-black text-primary-black mb-6">2. PURCHASES/PAYMENT</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>
                  <strong>2.1 Making a purchase/execution of the 'Contract'</strong>
                </p>
                <p>To purchase a Product, the Customer must:</p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>(i) include the selected Product in the "basket" by clicking on the relevant button,</li>
                  <li>(ii) either login to their account or fill in their details at checkout,</li>
                  <li>(iii) accept Nixwoker's terms and privacy policy</li>
                  <li>(iv) provide payment details by clicking "make a payment"</li>
                </ul>
                <p>
                  Sending of the order constitutes a proposal to purchase the selected Product, regulated under Nixwoker's Terms and binding for the Customer with no prejudice to the cancellation rights under Section 3. The sending of the order proposal by the Customer entails the obligation of the Customer to pay the price of the ordered Product.
                </p>
                <p>
                  <strong>2.2</strong> The order proposal and the Customer's data related to that order proposal will be kept by Nixwoker for the period required by applicable legislation, as provided under the privacy policy.
                </p>
                <p>
                  <strong>2.3</strong> A purchase may be refused, or the number of items sold limited by Nixwoker within 30 days of receipt in the following events (by way of example but without limitation):
                </p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>(i) the Products are not available</li>
                  <li>(ii) suspected, fraudulent, or illegal activities, including suspected purchases for commercial purposes</li>
                  <li>(iii) the Customer has not fulfilled their obligations deriving from a prior contract executed with Nixwoker</li>
                </ul>
                <p>
                  <strong>2.4</strong> In case of unavailability of one or more of the Products, the Customer will receive an email informing them about the unavailability of the Products. In this case the contract will be cancelled or partially accepted just in relation to the available Products. In case of partial acceptance, the Customer shall be due only the price of the available Products and Nixwoker will arrange a refund or credit note for any monies paid for unavailable products.
                </p>
                <p>
                  <strong>2.5</strong> The prices of the Products are indicated on the Website in GBP. The Customer will be asked to confirm the area they are visiting our website from (either UK or Overseas) and based on this answer, prices shown to the Customer will either be inclusive of UK VAT (in the case of connecting from the UK) or be shown exclusive of UK VAT (in the case of connecting from elsewhere). Final prices charged at checkout are dependent on the delivery address selected by the Customer – for example, if a Customer has selected that they are connecting from an overseas district and subsequently are charged overseas prices (excluding UK VAT) but request delivery to a UK address, the prices will be subject to change to include UK VAT.
                </p>
                <p>
                  <strong>2.6</strong> Delivery costs, if applicable, shall be added to the price of the Products and will be indicated separately on the invoice/order confirmation.
                </p>
                <p>
                  <strong>2.7</strong> Nixwoker regularly checks that prices of the Products displayed on the Website are correct. However, Nixwoker cannot guarantee the complete absence of errors. In the event that Nixwoker discover an error in the pricing of a Product, Nixwoker shall cancel the order and offer the Customer the opportunity to purchase the Product at the correct price. If the error is discovered after the order has been accepted, Nixwoker will also offer the Customer the opportunity to cancel the order.
                </p>
                <p>
                  <strong>2.8</strong> Payment of the price of the Products included in the order and the relevant delivery charges, if any, shall be paid by the Customer by debit/credit card (either Visa, Mastercard or American Express) or by bank transfer. All costs and expenses (including bank charges) associated with any payment method or bank transfer applied to the Customer by their bank or card issuer, shall be borne by the Customer. As the purchaser, the Customer represents and warrants to have legally obtained the funds used to pay the price of the Products.
                </p>
                <p>
                  <strong>2.9</strong> Payment is due in full at the point of purchase (checkout) for all Products other than Made to Order Products. When a Customer places an order for a Made to Order product, they can either pay the full balance for this Product or have the option of paying a 25% 'deposit' on the cost of the Product at checkout, with the rest payable upon Nixwoker's completion of the item (the Customer will be informed of an estimated completion date within 3 working days of placing the order). A Customer can request that Nixwoker automatically attempt to take payment of the remaining balance at the point of completion or alternatively the Customer can request to be notified to make the payment themselves.
                </p>
                <p>
                  <strong>2.10</strong> Nixwoker will notify the Customer when their Made to Order Product is ready for final payment and dispatch. If the Customer does not respond to this initial contact, Nixwoker will attempt several emails and phone calls over the 30 day period following the completion date. In the event that, for any reason, Nixwoker cannot obtain final payment for a Made to Order Product within 30 days of order completion, Nixwoker will inform the Customer via a final email that they will attempt to minimise all losses they have incurred due to the breach of the Contract by cancelling the sale and adding the Product to Nixwoker's stock, as well as covering monies lost by retaining up to the whole value of the initial 25% deposit paid on the Made to Order Product. If the losses are less than the deposit paid, the remaining balances will be refunded to the customer within 5 working days of cancellation of the sale.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-2xl font-black text-primary-black mb-6">3. CANCELLATION</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>
                  <strong>3.1</strong> None of the following conditions are deemed to affect a Customer's rights as pertaining to the Consumer Rights Act 2015.
                </p>
                <p>
                  <strong>3.2</strong> For any Stock Products purchased from Nixwoker, the Customer has the right to withdraw from the contract with no reason within 30 days from the date in which the Customer physically receives the items. Nixwoker's terms for processing 'Returns' are outlined in the following section (Section 4).
                </p>
                <p>
                  <strong>3.3</strong> The same right of withdrawal does not apply to orders for Made to Order Products, such as, for example, a jacket made to a Customer's specific measurements. In these instances, the Customer has a minimum 14 day cooling off period which begins when Nixwoker have reviewed and accepted the Customer's order (normally within 3 working days of order placement). During this period, a Customer can cancel the Contract and receive a full refund of any monies paid within 5 working days of notifying us of the cancellation.
                </p>
                <p>
                  <strong>3.4</strong> Once the minimum 14 day period has expired and the Customer has confirmed their final specifications, the Customer may still cancel the Contract for a Made to Order Product but will be liable for any costs incurred by Nixwoker in processing the order if it has already been moved into the production process. After these costs have been calculated, Nixwoker will refund any monies owed once these costs have been calculated within 5 working days of being notified of the cancellation.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="text-2xl font-black text-primary-black mb-6">4. RETURNS</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>
                  <strong>4.1</strong> Nixwoker accept returns on most goods (exceptions are detailed in sections 4.7-4.8) providing the provisions in sections 4.2-4.4 are met.
                </p>
                <p>
                  <strong>4.2</strong> The Products must be returned within 30 days of receipt.
                </p>
                <p>
                  <strong>4.3</strong> The Products must be returned in the same condition they were sold in - unaltered, unused, undamaged and with all the original tags and labels attached.
                </p>
                <p>
                  <strong>4.4</strong> The customer must ensure that goods (especially jackets) are packed neatly and sent back in a box that the Products fit in to (ideally, the same packaging the Products were sent in). It is vital that goods are not damaged by being squashed into smaller than necessary packaging.
                </p>
                <p>
                  <strong>4.5</strong> In the event that the Products are not returned within 30 days of receipt, or the packaging or handling of the goods by the Customer (other than the handling necessary to establish the nature, characteristics and function of the goods) results in any diminished value of the Products, Nixwoker reserves the right to refuse the return of the Products and return the products to the Customer or where applicable, offer a partial refund or credit note equating to the diminished reselling value of the product at our discretion.
                </p>
                <p>
                  <strong>4.6</strong> The Customer must contact Nixwoker regarding the return of a Product as soon as reasonably possible so Nixwoker can log this on the Customer's record and advise the next steps in processing the return. Nixwoker will ask the Customer to print off and fill out the returns form found in Nixwoker's Returns FAQ section, cutting off the top and sticking to the front of the box. This step is very important as the box needs to be clearly marked as a return - this is especially important for returns from outside of the UK so there aren't any hold ups or additional charged applied at customs. The bottom half should be placed inside the box for speed of processing of the return at Nixwoker's end.
                </p>
                <p>
                  <strong>4.7</strong> In cases of Made to Order Products where the Customer has requested custom measurement alterations and modifications, Nixwoker can only offer a full exchange, credit note or refund if there is an error in the Product make up, a fault in materials or the Product doesn't meet the Customer's measurement specifications within the accepted tolerances. If the Customer's made to order Product has been made by Nixwoker to the Customer's agreed specifications, Nixwoker reserve the right to refuse the return or, at their discretion, apply a restocking charge up to 20% of the Product's value when processing the return to cover the additional production, restocking and discounting costs incurred by Nixwoker in the process of replacing and reselling the Made to Order Product.
                </p>
                <p>
                  <strong>4.8</strong> Nixwoker do not accept returns on washed non-sanforized denim goods.
                </p>
                <p>
                  <strong>4.9</strong> In the case of a damaged or defective Product, Nixwoker can arrange a return through their preferred Courier and cover the expenses of the return. Alternatively, the Customer can arrange their own postage at their own expense, but Nixwoker cannot accept responsibility for these returned goods until they arrive on our premises. Nixwoker strongly recommend that the Customer adequately insures the package in these instances.
                </p>
                <p>
                  <strong>4.10</strong> In cases where the return does not include a damaged or defective product, the Customer is liable for the postage costs incurred in sending the item to them. Arranging the return shipment and it's cost will also be the Customer's responsibility.
                </p>
                <p>
                  <strong>4.11</strong> All returns must be sent to the following address:
                </p>
                <p className="ml-4">
                  <div>Nixwoker Bespoke</div>
                  <div>Greenbank Mill</div>
                  <div>Huddersfield Street</div>
                  <div>Galashiels</div>
                  <div>TD1 3AY</div>
                  <div>Scotland</div>
                </p>
                <p>
                  <strong>4.12</strong> If upon a return, the Customer wishes to replace the returned Product, for any Products other than Made to Order Products, Nixwoker will dispatch the replacement Product within 5 working days of receipt of the returned Product. This is subject to stock levels and availability of the replacement Product. In cases where Nixwoker are unable to replace the Product, the Customer is entitled to cancel the contract and Nixwoker shall reimburse all sums paid under the Contract. For replacements on Made to Order Products, Nixwoker will endeavour to prioritise and process this as soon as possible, normally within 30 days of receipt of the returned product, but wait times are dependent on material/stock availability. In the case of Made to Order products which feature an error or don't meet the Customer's agreed specifications where the Customer does not want to wait for a replacement, the Customer is entitled to cancel the contract and Nixwoker shall reimburse all sums paid under the Contract. In cases of Made to Order products which have been made by Nixwoker to the Customer's agreed specifications, exchanges may be subject to the exception or restocking charge outlined in section 4.7.
                </p>
                <p>
                  <strong>4.13</strong> If upon a return, the Customer wishes to exchange the returned Product for a different one, for any Products other than Made to Order Products, Nixwoker will dispatch the exchanged Product within 5 working days of receipt of the returned Product. This is subject to stock levels and availability of the exchanged Product. In cases where Nixwoker are unable to exchange the Product, the Customer is entitled to cancel the contract and Nixwoker shall reimburse all sums paid under the Contract. For exchanges on Made to Order Products, Nixwoker will endeavour to prioritise and process this as soon as possible, normally within 30 days of receipt of the returned product, but wait times are dependent on material/stock availability. In the case of Made to Order products which feature an error or don't meet the Customer's agreed specifications where the Customer does not want to wait for a replacement, the Customer is entitled to cancel the contract and Nixwoker shall reimburse all sums paid under the Contract. In cases of Made to Order products which have been made by Nixwoker to the Customer's agreed specifications, exchanges may be subject to the exception or restocking charge outlined in section 4.7.
                </p>
                <p>
                  <strong>4.14</strong> If upon a return, the Customer would like a credit note or refund for the returned Product, Nixwoker will contact the Customer within 5 working days of receipt of the returned Product to confirm the Customer's account or card details for processing the refund. Once these have been confirmed, Nixwoker will process the refund within 2 working days. In cases of Made to Order products which have been made by Nixwoker to the Customer's agreed specifications, the refund may be subject to the exception or restocking charge outlined in section 4.7.
                </p>
                <p>
                  More information on returns can be found in our FAQ section.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h3 className="text-2xl font-black text-primary-black mb-6">5. SHIPPING/DELIVERY</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>
                  <strong>5.1</strong> Any purchased Products will be delivered by a Courier service selected by Nixwoker ("Courier") on working days to the address indicated by the Customer. As standard, Nixwoker currently ship worldwide via DHL courier services, although depending on the Customer's location an alternative courier may be used.
                </p>
                <p>
                  <strong>5.2</strong> Nixwoker deliver to most countries in the world, but in the cases where the Customer has selected a delivery address in a location Nixwoker cannot ship to, Nixwoker will contact the Customer to arrange delivery to an alternative location or if this is not possible, cancel the order and reimburse all sums paid under the Contract.
                </p>
                <p>
                  <strong>5.3</strong> Except in the event or unforeseeable circumstances, purchased Products shall be delivered within 30 days of the date of both completion and full payment of the Customer's order. In cases where the delivery has not occurred within the above indicated term, the Customer is entitled to cancel the contract and Nixwoker shall reimburse all sums paid under the Contract.
                </p>
                <p>
                  <strong>5.4</strong> Nixwoker's preferred Courier will inform the Customer of an estimated delivery date shortly after the Customer's order is processed by Nixwoker's dispatch team. All times and dates given for the delivery of goods are given in good faith by our Courier but without any responsibility on the part of Nixwoker.
                </p>
                <p>
                  <strong>5.5</strong> Nixwoker shall not be liable for any losses or damages whether direct, indirect or consequential beyond the cost of the goods and delivery charges due to any delay or default in delivery of any goods, however caused.
                </p>
                <p>
                  <strong>5.6</strong> If a package does not arrive on the delivery date, the Customer is expected to contact Nixwoker as soon as possible so Nixwoker can investigate with the Courier. If a package is confirmed by the Courier as lost in transit, except in cases as stipulated in section 5.7, Nixwoker will replace or remake the Product and resend as a matter of priority free of charge. If this involves remaking a made to order jacket, Nixwoker will endeavour to prioritise and process this as soon as possible, but wait times are dependent on material/stock availability. Alternatively, the Customer is entitled to cancel the contract and Nixwoker shall reimburse all sums paid under the Contract.
                </p>
                <p>
                  <strong>5.7</strong> In cases where the Customer wishes to arrange their own shipping method/use their own preferred courier, Nixwoker shall not be liable for any loss or damage in delivery of any goods.
                </p>
                <p>
                  <strong>5.8</strong> At the point of delivery of the Products by the Courier, the Customer (or a nominated representative) is required to:
                </p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>(i) Confirm that the number of items delivered corresponds to the number indicated on the delivery note</li>
                  <li>(ii) Verify that packaging and seals are intact, undamaged, or altered in any manner</li>
                  <li>(iii) Sign the delivery note</li>
                  <li>(iv) Show their ID if requested</li>
                </ul>
                <p>
                  Any damage to the packaging or discrepancies in the number of items must be immediately indicated in writing on the Courier's delivery note. Except to the extent permitted under applicable laws, as soon as the Courier's document has been signed and no objection has been raised by the Customer, the Customer may not make any objection to the exterior characteristics of the delivered parcel.
                </p>
                <p>
                  <strong>5.9</strong> If a Customer's Product is damaged or defective upon arrival, the Customer must inform Nixwoker as soon as possible. Provided the Customer informs Nixwoker timeously, Nixwoker will replace the Product (or provide a full or partial refund where applicable). Alternatively, the Customer is entitled to cancel the contract and Nixwoker shall reimburse all sums paid under the Contract.
                </p>
                <p>
                  <strong>5.10</strong> If for any reason the Customer is not home or misses their delivery, the Customer is expected to contact the Courier to arrange an alternative delivery slot. In the event of multiple missed deliveries or the Customer failing to contact the Courier, the Customer may be subject to additional postage charges if Nixwoker incur additional costs from the Courier.
                </p>
                <p>
                  <strong>5.11</strong> Unless otherwise stated, delivery charges are borne by the Customer and will be indicated separately at the checkout and on the invoice. As stated at the checkout, the postage charges Nixwoker applies to a Customer's order at that point are estimated and subject to change if a customer has ordered multiple Products or requested multiple deliveries. Nixwoker will contact the Customer to confirm any additional charges before adding them to an order. If the Customer does not agree to pay these additional charges, the Customer is entitled to cancel the contract and Nixwoker shall reimburse all sums paid under the Contract.
                </p>
                <p>
                  <strong>5.12</strong> The Customer's postage charge covers the carriage of the goods from Nixwoker's factory to the Customer's requested delivery address and does not include any calculation of the duty/sales tax which may or may not be applied in any country which Nixwoker export to. Each countries' government have their own laws, regulations, and tariffs which they levy on such imports of foreign goods. This is beyond Nixwoker's control regardless of which country goods are shipped to and is down to each governments' policy concerning the importation of goods.
                </p>
                <p>
                  <strong>5.13</strong> If the Customer has supplied an incorrect delivery address due to an oversight on their part, the Customer may be subject to additional postage charges if Nixwoker incur additional costs from the Courier in redirecting the package to the correct address.
                </p>
                <p>
                  More information on shipping can be found in our FAQ section.
                </p>
                <p>
                  <strong>5.14</strong> If the Customer refuses to pay customs/duties charged by their country's customs office and the good need to be returned to Nixwoker, the Customer will be liable for any costs borne by Nixwoker in returning the goods to Nixwoker and any refund due to the Customer will have these costs subtracted from them.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h3 className="text-2xl font-black text-primary-black mb-6">6. WEBSITE CONTENT</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>
                  <strong>6.1</strong> All information, services and materials on the Website are provided "as is" and without warranty of any kind from Nixwoker.
                </p>
                <p>
                  <strong>6.2</strong> All materials on this Website, in whole and in part, including by way of example trademarks, domain names, designs and models, patents and copyright, are protected and in the sole ownership of Nixwoker. The only exceptions to this are the pictures used as 'banner' pics used in our Military departments which are licensed through Shutterstock.
                </p>
                <p>
                  <strong>6.3</strong> Unless otherwise agreed in writing, all materials on the Website, including text, graphics, information, images, illustrations, designs, photographs, video clips, sounds, artwork, computer code and other materials, and the copyrights, trademarks and/or other intellectual property rights in such materials (collectively, the "Content"), are owned, controlled and/or licensed by Nixwoker.
                </p>
                <p>
                  <strong>6.4</strong> This Website is solely for private, personal and non-commercial use, and the Material on this Website is presented for information and/ or promotional purposes only. You may download or copy the Content and other downloadable materials displayed on the Website for your personal use only. No rights, title or interest in any Content is transferred to you as a result of any such downloading or copying. You may not reproduce (except as noted above), publish, distribute, display, alter, modify, create derivative works from, sell or exploit or otherwise use any of the Content or the Website for any public or commercial purpose.
                </p>
                <p>
                  <strong>6.5</strong> In describing and portraying Products on the Website, Nixwoker attempt to be as accurate as possible. However, Nixwoker do not warrant that the product descriptions or any other Content of the Website is completely accurate, reliable, current or error free. Nixwoker reserve the right to correct any typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing and availability from time to time without prior notice.
                </p>
                <p>
                  <strong>6.6</strong> Nixwoker have made every effort to display as accurately as possible the colours and finishes of the Products that appear on the Website – for example ensuring that Nixwoker's lights and cameras are colour balanced and regularly calibrated. However, colours, shades and particular nuances of leather vary from hide to hide and between batches so colours and finishes will be indicative and do not have a binding/contractual value. Nixwoker also cannot guarantee that a Customer's monitor/display colour is correctly calibrated, and so have no control or liability over how the images Nixwoker upload to the Website are displayed to a Customer on their device.
                </p>
                <p>
                  <strong>6.7</strong> Creating or maintaining a link from another website to any page on our Website without Nixwoker's prior written permission is prohibited. Running or displaying the Website or any information or material displayed on the Website in frames or through similar means on another website without Nixwoker's prior written permission is prohibited. Any permitted links to the Website must comply will all applicable laws and regulations.
                </p>
                <p>
                  <strong>6.8</strong> From time to time, the Website may contain links to other websites that are not owned, operated, or controlled by Nixwoker. All such links are provided solely as a convenience to Nixwoker's Customers and Nixwoker's provision of these links does not imply endorsement of the linked content or site or business by Nixwoker. Neither shall Nixwoker have any liability in connection with them including, but not limited to, infringement of copyright or other rights by any person or entity. The Customer's access to and use of content from 3rd Party Web sites remains entirely at their own risk.
                </p>
                <p>
                  <strong>6.9</strong> Nixwoker reserve the right, at any time at their sole discretion, to: modify, suspend, or discontinue any service, content, feature or product offered through the Website as well as modify and/or waive any fees charged in connection with the Website or any Product on the Website; and/or offer opportunities to some or all users of the Website.
                </p>
                <p>
                  <strong>6.10</strong> Nixwoker is fully committed to maintain, enforce, and protect its intellectual property rights throughout the world and to strongly fight against any infringement. Any use which is not expressly permitted by these Terms of Use is prohibited. The lack of any remedy by Nixwoker whether in Court or out of Court does not mean acquiescence or tolerance of any violations of these Terms and/or breach of intellectual property rights of which Nixwoker has ownership.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h3 className="text-2xl font-black text-primary-black mb-6">7. LIMITATION OF LIABILITY</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>
                  <strong>7.1</strong> Some countries do not allow some of the following limitations or exclusions of liability therefore, if required by applicable law, some, or all of the contents of this section may not apply to every Customer.
                </p>
                <p>
                  <strong>7.2</strong> Nothing in these terms and conditions shall limit or exclude:
                </p>
                <ul className="ml-4 space-y-2 list-disc list-inside">
                  <li>(i) Nixwoker's liability for death or personal injury caused by Nixwoker's negligence, the negligence of its employees, agents or subcontractors (as applicable)</li>
                  <li>(ii) Nixwoker's liability in case of fraud, fraudulent misrepresentation, or gross negligence</li>
                  <li>(iii) Any other liability that cannot be excluded or limited by applicable law</li>
                </ul>
                <p>
                  <strong>7.3</strong> Nixwoker shall under no circumstances be liable to the buyer whether in contract, tort (including negligence), breach of statutory duty, or otherwise for any loss of profit, or any indirect or consequential loss arising under or in connection with the Contract. Nixwoker's total liability to the Customer in respect of all other losses arising under or in connection with the Contract, whether in contract, tort (including negligence), breach of statutory duty, or otherwise shall in no circumstances exceed the total value of the Customer's order.
                </p>
                <p>
                  <strong>7.4</strong> No liability will be accepted by Nixwoker for any failure of, or delay in, performance which is due wholly or partially to restriction by Government or other competent authority, strikes, lock-out, failure by suppliers to supply raw materials or to any cause whatsoever outside the seller's control.
                </p>
                <p>
                  <strong>7.5</strong> As Nixwoker's Website and its services are provided free of charge, the Customer is responsible for evaluating the information and content obtained through the Website. By using the Website, a Customer agrees to undertake all risks connected to the relevant use and to take full responsibility for any failure in the use, loss of data and costs associated with all necessary service and maintenance of hardware and/or software used in connection with the website.
                </p>
                <p>
                  <strong>7.6</strong> Any waiver by Nixwoker of its rights hereunder in respect of breach by the Customer shall not affect the rights of the seller in the event of a subsequent breach by the Customer.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h3 className="text-2xl font-black text-primary-black mb-6">8. CREDIT NOTES AND ACCOUNT CREDIT</h3>
              <div className="space-y-4 text-sm md:text-base text-gray-800 leading-7">
                <p>
                  <strong>8.1</strong> Where Nixwoker agrees to issue a credit note or apply a credit balance to a Customer's account (whether arising from a return, cancellation, goodwill gesture, partial refund, overpayment or otherwise), such credit shall be valid for a period of 36 months from the date of issue unless otherwise stated in writing.
                </p>
                <p>
                  <strong>8.2</strong> Credit notes and account credit are non-transferable and may only be used by the Customer to whom they were issued.
                </p>
                <p>
                  <strong>8.3</strong> Credit notes and account credit are not redeemable for cash and are non-refundable, except where required by applicable law.
                </p>
                <p>
                  <strong>8.4</strong> Any unused credit remaining after the expiry date shall automatically lapse and shall not be redeemable or refundable.
                </p>
                <p>
                  <strong>8.5</strong> Where a Customer uses account credit or a credit note in full or part payment for a Product and subsequently cancels that order, any refund due shall first be applied back to account credit. No cash refund shall be made in respect of amounts originally paid using account credit, except where required by applicable law.
                </p>
                <p>
                  <strong>8.6</strong> Nixwoker reserves the right to refuse to issue credit notes in place of refunds where Nixwoker determines, acting reasonably, that a monetary refund is required under statutory consumer rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}