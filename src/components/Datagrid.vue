<script setup lang="ts">
import '@grapecity/wijmo.styles/wijmo.css'
import { WjFlexGrid, WjFlexGridColumn } from '@grapecity/wijmo.vue2.grid'

let countries =
    `Afghanistan, Albania, Algeria, American Samoa, Andorra, Angola, Anguilla, Antarctica, Antigua and Barbuda, Argentina, Armenia, Aruba, Australia, Austria, Azerbaijan, Bahamas, Bahrain, Bangladesh, Barbados, Belarus, Belgium, Belize, Benin, Bermuda, Bhutan, Bolivia, Bosnia and Herzegovina, Botswana, Bouvet Island, Brazil, British Indian Ocean Territory, Brunei Darussalam, Bulgaria, Burkina Faso, Burundi, Cambodia, Cameroon, Canada, Cape Verde, Cayman Islands, Central African Republic, Chad, Chile, China, Christmas Island, Cocos (Keeling Islands), Colombia, Comoros, Congo, Cook Islands, Costa Rica, Cote D'Ivoire (Ivory Coast), Croatia (Hrvatska, Cuba, Cyprus, Czech Republic, Denmark, Djibouti, Dominica, Dominican Republic, East Timor, Ecuador, Egypt, El Salvador, Equatorial Guinea, Eritrea, Estonia, Ethiopia, Falkland Islands (Malvinas), Faroe Islands, Fiji, Finland, France, France, Metropolitan, French Guiana, French Polynesia, French Southern Territories, Gabon, Gambia, Georgia, Germany, Ghana, Gibraltar, Greece, Greenland, Grenada, Guadeloupe, Guam, Guatemala, Guinea, Guinea-Bissau, Guyana, Haiti, Heard and McDonald Islands, Honduras, Hong Kong, Hungary, Iceland, India, Indonesia, Iran, Iraq, Ireland, Israel, Italy, Jamaica, Japan, Jordan, Kazakhstan, Kenya, Kiribati, Korea (North), Korea (South), Kuwait, Kyrgyzstan, Laos, Latvia, Lebanon, Lesotho, Liberia, Libya, Liechtenstein, Lithuania, Luxembourg, Macau, Macedonia, Madagascar, Malawi, Malaysia, Maldives, Mali, Malta, Marshall Islands, Martinique, Mauritania, Mauritius, Mayotte, Mexico, Micronesia, Moldova, Monaco, Mongolia, Montserrat, Morocco, Mozambique, Myanmar, Namibia, Nauru, Nepal, Netherlands, Netherlands Antilles, New Caledonia, New Zealand, Nicaragua, Niger, Nigeria, Niue, Norfolk Island, Northern Mariana Islands, Norway, Oman, Pakistan, Palau, Panama, Papua New Guinea, Paraguay, Peru, Philippines, Pitcairn, Poland, Portugal, Puerto Rico, Qatar, Reunion, Romania, Russian Federation, Rwanda, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and The Grenadines, Samoa, San Marino, Sao Tome and Principe, Saudi Arabia, Senegal, Seychelles, Sierra Leone, Singapore, Slovak Republic, Slovenia, Solomon Islands, Somalia, South Africa, S. Georgia and S. Sandwich Isls., Spain, Sri Lanka, St. Helena, St. Pierre and Miquelon, Sudan, Suriname, Svalbard and Jan Mayen Islands, Swaziland, Sweden, Switzerland, Syria, Taiwan, Tajikistan, Tanzania, Thailand, Togo, Tokelau, Tonga, Trinidad and Tobago, Tunisia, Turkey, Turkmenistan, Turks and Caicos Islands, Tuvalu, Uganda, Ukraine, United Arab Emirates, United Kingdom (Britain / UK), United States of America (USA), US Minor Outlying Islands, Uruguay, Uzbekistan, Vanuatu, Vatican City State (Holy See), Venezuela, Viet Nam, Virgin Islands (British), Virgin Islands (US), Wallis and Futuna Islands, Western Sahara, Yemen, Yugoslavia, Zaire, Zambia, Zimbabwe`.split(
      ', '
    ),
  data = []
for (let i = 0; i < countries.length; i++) {
  data.push({
    id: i,
    country: countries[i],
    sales: Math.random() * 10000,
    expenses: Math.random() * 5000
  })
}
</script>

<template>
  <WjFlexGrid
    :itemsSource="data"
    :alternatingRowStep="0"
    headersVisibility="Column"
    selectionMode="Cell"
    :deferResizing="true"
  >
    <WjFlexGridColumn :header="'Country'" :binding="'country'" width="2*" />
    <WjFlexGridColumn
      :header="'Sales'"
      :binding="'sales'"
      width="*"
      format="n2"
    />
    <WjFlexGridColumn
      :header="'Expenses'"
      :binding="'expenses'"
      width="*"
      format="n2"
    />
  </WjFlexGrid>
</template>

<style>
.wj-cell {
  border-right-color: var(--border);
  border-bottom: none;
  background: var(--block-background);
  color: var(--foreground);
  padding: 0.375rem;
}

.wj-cell.wj-header {
  background: var(--background);
  border-bottom: 1px solid var(--border);
  color: var(--foreground);
  background: var(--block-background);
  font-weight: 500;
}

.wj-cell.wj-header:hover {
  background: var(--background);
  color: var(--foreground);
}

.wj-content {
  border: 1px solid var(--border) !important;
  border-radius: 0.125rem;
  background: none;
}

.wj-cells .wj-cell.wj-state-selected {
  background: var(--block-background);
  color: var(--foreground);
  box-shadow: inset 0 -2px 0 #47d16c;
}

.wj-cells .wj-cell:focus-within {
  box-shadow: inset 0 -2px 0 #47d16c;
}

.wj-datagrid {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
}
</style>
