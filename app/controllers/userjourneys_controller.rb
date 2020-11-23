class UserjourneysController < ApplicationController
  # before_action :set_userjourney, except: [:new]
  before_action :set_demo, except: [:destroy]
  # before_action :set_persona, except: [:new, :destroy]

  def index
  end

  def new
    @userjourney = Userjourney.new
    @persona = Persona.find(params[:persona_id])
  end

  def create
    @userjourney = Userjourney.new(userjourney_params)
    @userjourney.demo = @demo
    @userjourney.persona = Persona.find(params[:userjourney][:persona_id])

    if @userjourney.save
      redirect_to dashboard_path, notice: 'Yay! 🎉 Your [Persona Name] User journey was successfully saved. Check it out 👇'
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
    @userjourney = Userjourney.find(params[:id])
    @userjourney.destroy
    redirect_to dashboard_path, notice: 'Yay! 🎉 Your userjourney was successfully removed.'
  end

  private

  def userjourney_params
    params.require(:userjourney).permit(:name, :demo_id, :persona_id, tasks_attributes: %i[id standpoint viewpoint actionpoint _destroy])
  end

  def set_userjourney
    @userjourney = Userjourney.find(params[:id])
  end

  def set_persona
    @persona = Persona.find(params[:persona])
  end

  def set_demo
    @demo = Demo.find(params[:demo_id])
  end
end