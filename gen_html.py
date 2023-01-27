import pandas as pd
import numpy as np

chapters = pd.read_csv("./chapters.csv")
chapters.columns = ['timestamp', 'region', 'name',
										'location', 'district', 'heads', 'emails', 'bio', 'img']

chapter_template = """
{region}


<tr
	class="dropdownRow"
	href="#{id}"
	role="button"
	aria-expanded="false"
	aria-controls="{id}"
>
	<td class="downCaret"><i class="fas fa-caret-down"></i></td>
	<td>{name}</td>
	<td>{location}</td>
	<td>{district}</td>
</tr>
<tr class="collapse" id="{id}">
	<td colspan="4" style="padding-left: 50px; padding-top: 20px">
		<h1 style="font-size: 25px; padding-bottom: 20px">Chapter Organizer</h1>
		{chapter_heads}
		<p style="padding-top: 50px">
		{bio}
		</p>
	</td>
</tr>
"""

chapter_head_template = """
<p style="float: left;">
{name}<a
	style="padding-left: 10px"
	href="mailto:{email}"
	><i class="fas fa-envelope"></i
></a>
</p>
<br /><br />
"""


def format_id(name):
		return name.replace(" ", "-").replace(".", "").replace(",", "").replace("(", "").replace(")", "")


html = ""

for i in range(len(chapters)):
		chapter = chapters.iloc[i, :]
		name = chapter['name']
		heads = chapter['heads'].split(",")
		emails = chapter['emails'].split(",")
		img = chapter['img']
		heads_html = ""
		for idx, head in enumerate(heads):
				heads_html += '<img class="prof-img" src="#"/>\n' if not (chapter['img'] is np.nan) else ""
				heads_html += chapter_head_template.format(
						name=head.strip(), email=emails[idx].strip())
		chapter_html = chapter_template.format(region=chapter['region'], id=format_id(name), name=name, location=chapter['location'], district=chapter['district'], chapter_heads=heads_html, bio=chapter['bio'])
		html += chapter_html + "\n\n\n\n"
		if not (img is np.nan):
				print(f"Replace Images for {name}: {img}")

with open("output.html", "w") as outfile:
		outfile.write(html)
