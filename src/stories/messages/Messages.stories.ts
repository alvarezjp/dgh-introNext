import Message from "@/components/messages/Message";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: 'Externo/interno',
  component: Message,
  parameters: {
    layout: 'centered', // Esto indica que el mensaje quede en el centro
  },
  tags: ['autodocs'], // esto dice que se genere automaticamente la documentacion
  
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    message: {message:'esto es un mensaje de prueba',
        name:'Tulio Tribinio',
        username:'TuTri'
    },
  },
};
