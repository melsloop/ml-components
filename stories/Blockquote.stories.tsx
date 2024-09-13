import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Text from '../src/components/Text';
import Blockquote from '../src/components/Blockquote/Blockquote';

const meta = {
	title: 'Text/Blockquote',
	component: Blockquote,
	tags: ['autodocs'],
	args: {
		children:
			"To be, or not to be- that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them.",
		cite: 'Hamlet · III i 64',
		citeSrc:
			'https://www.opensourceshakespeare.org/views/plays/play_view.php?WorkID=hamlet&Act=3&Scene=1&Scope=scene&LineHighlight=1749#1740',
	},
	argTypes: {},
} satisfies Meta<typeof Blockquote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function Render({ children, ...args }) {
		return <Blockquote {...args}>{children}</Blockquote>;
	},
};

export const ContentComposition: Story = {
	render: function Render(args) {
		return (
			<Blockquote {...args}>
				<>
					<Text
						asChild
						variant="h2"
						size="md"
						contentEditable
					>
						<p>
							To be, or not to be- that is the question: Whether 'tis nobler in
							the mind to suffer The slings and arrows of outrageous fortune Or
							to take arms against a sea of troubles, And by opposing end them.
							To die- to sleep- No more; and by a sleep to say we end The
							heartache, and the thousand natural shocks That flesh is heir to.
							'Tis a consummation Devoutly to be wish'd. To die- to sleep. To
							sleep- perchance to dream: ay, there's the rub! For in that sleep
							of death what dreams may come When we have shuffled off this
							mortal coil, Must give us pause.
						</p>
					</Text>
					<Text
						variant="h2"
						size="md"
						asChild
					>
						<p>
							There's the respect That makes calamity of so long life. For who
							would bear the whips and scorns of time, Th' oppressor's wrong,
							the proud man's contumely, The pangs of despis'd love, the law's
							delay, The insolence of office, and the spurns That patient merit
							of th' unworthy takes, When he himself might his quietus make With
							a bare bodkin?
						</p>
					</Text>
				</>
			</Blockquote>
		);
	},
};
